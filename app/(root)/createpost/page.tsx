import CreatePostComponent from "@/components/post/CreatePost";
import React from "react";
import { Metadata } from "next";

const CreatePost = () => {
	return (
		<>
			<CreatePostComponent />
		</>
	);
};

export default CreatePost;

export const metadata: Metadata = {
	title: "Create Post | EngageX",
	description:
		"Share your story with the world - create and publish engaging content on EngageX.",
};
