"use server";
import { databases, storage } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/config";
import { ID, Query } from "appwrite";

export async function createPost(formData: FormData) {
  try {
    const file = formData.get("file") as File | null;
    if (!file) {
      return { success: false, error: "No file uploaded" };
    }

    // Upload image to Appwrite storage
    const imageUpload = await storage.createFile(
      appwriteConfig.mediabucketId,
      ID.unique(),
      file
    );

    // Construct the image URL
    const imageUrl = storage.getFilePreview(
      appwriteConfig.mediabucketId,
      imageUpload.$id
    );

    // Ensure tags are properly handled as an array
    let tags = formData.get("tags");
    const parsedTags = tags ? tags.toString().split(",").map(tag => tag.trim()) : [];

    // Save post details in Appwrite Database
    const document = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.createpostId,
      ID.unique(),
      {
        caption: formData.get("caption"),
        tags: parsedTags, // Ensures tags are stored as an array
        imageId: imageUpload.$id,
        imageUrl: imageUrl,
      }
    );

    return { success: true, data: document };
  } catch (error:any) {
    console.error("Error in createPost:", error);
    return { success: false, error: error.message || "Failed to create post" };
  }
}


export async function UpdatePost(postId: string, formData: FormData) {
  try {
    const file = formData.get("file") as File | null;
    if (!file) {
      return { success: false, error: "No file uploaded" };
    }
    // Upload image to Appwrite storage
    const imageUpload = await storage.createFile(
      appwriteConfig.mediabucketId,
      ID.unique(),
      file
    );
    // Construct the image URL
    const imageUrl = storage.getFilePreview(
      appwriteConfig.mediabucketId,
      imageUpload.$id
    );
    // Ensure tags are properly handled as
    let tags = formData.get("tags");
    const parsedTags = tags ? tags.toString().split(",").map(tag => tag.trim()) : [];
    // Save post details in Appwrite Database
    const document = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.createpostId,
      postId,
      {
        caption: formData.get("caption"),
        tags: parsedTags, // Ensures tags are stored as an array
        imageId: imageUpload.$id,
        imageUrl: imageUrl,
      }
      );
      
      return { success: true, data: document };

    }
    catch(error:any) {
      console.error("Error in UpdatePost:", error);
      return { success: false, error: error.message || "Failed to update post" };

    
    }
  }


  export async function GetPost(){
    try {
      const posts = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.createpostId,
        [
          Query.orderDesc('$createdAt') // Sort by creation date in descending order
      ]
      );
      return { success: true, data: posts };
    } catch (error: any) {
      console.error("Error in GetPost:", error);
      return { success: false, error: error.message || "Failed to fetch posts" };
    }
    
  }