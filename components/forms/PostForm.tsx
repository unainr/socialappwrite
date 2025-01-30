"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

import { Postvalidation } from "@/lib";
import { createPost } from "@/lib/actions/useraction";
import { FileUpload } from "../ui/file-upload";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import Link from "next/link";

type PostFormProps = {
	caption: string;
	file: File[];
	tags: string[];
	imageUrl: string;
};

const PostForm = ({ post }: { post?: PostFormProps }) => {
	const router = useRouter();
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [files, setFiles] = useState<File[]>([]);
	const handleFileUpload = (files: File[]) => {
		setFiles(files);
	};
	// const {mutatedAsync:createPost, isPending: isLoadingCreate}= useCreatePost();
	// 1. Define your form.
	const form = useForm<z.infer<typeof Postvalidation>>({
		resolver: zodResolver(Postvalidation),
		defaultValues: {
			caption: post ? post?.caption : "",
			file: [],
			tags: post ? post?.tags.join(",") : "",
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof Postvalidation>) {
		setIsSubmitting(true);
		try {
			const formData = new FormData();
			formData.append("caption", values.caption);
			formData.append("tags", values.tags);

			if (files.length > 0) {
				formData.append("file", files[0]); // Send only the first file
			} else {
				console.error("No file selected");
			}

			const response = await createPost(formData);

			if (response.success) {
				toast({
					title: "Post created successfully",
					description: "Your post has been created successfully.",
				});
				router.push("/");
			} else {
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: "There was a problem with your request.",
					action: <ToastAction altText="Try again">Try again</ToastAction>,
				});
			}
		} catch (error: any) {
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: "There was a problem with your request.",
				action: <ToastAction altText="Try again">{error}</ToastAction>,
			});
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-9 w-full sm:w-[600px] md:w-[600px] mx-auto">
				<FormField
					control={form.control}
					name="caption"
					render={({ field }) => (
						<FormItem>
							<FormLabel>caption</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Write your caption here..."
									className="min-h-[120px] resize-none"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* // upload image */}

				<FormField
					control={form.control}
					name="file"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Add Photos</FormLabel>
							<FormControl>
								<FileUpload {...field} onChange={handleFileUpload} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* tages */}

				<FormField
					control={form.control}
					name="tags"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Add Tags</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Tags" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex justify-end gap-4">
					<Link href="/">
					<Button type="button" disabled={isSubmitting}>
						Cancel
					</Button>
					</Link>
					<Button type="submit" disabled={isSubmitting}>
						{isSubmitting ? (
							<>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
								Posting...
							</>
						) : (
							"Post"
						)}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default PostForm;
