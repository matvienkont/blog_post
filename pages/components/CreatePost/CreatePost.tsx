import {
	FormWrapper,
	InputWrapper,
	TitleInput,
	TextArea,
	FormField,
	Label,
	TextLables,
	PageTitle,
	Button
} from './styles/CreatePost';

interface ICreatePostProps {
	title: string;
	body: string;
	setTitle: (arg0: string) => void;
	setBody: (arg0: string) => void;
	handleSubmit: (arg0: React.FormEvent<HTMLFormElement>) => void;
}

export const CreatePostForm = (props: ICreatePostProps) => {
	return (
		<FormWrapper>
			<PageTitle>What are you waiting for? Post! &#x1F608;</PageTitle>
			<FormField as="form" onSubmit={props.handleSubmit} action="/">
				<InputWrapper>
					<Label>
						<TextLables>Title</TextLables>
						<TitleInput
							as="input"
							type="text"
							value={props.title}
							name="title"
							onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
								props.setTitle(event.target.value)}
							required
						/>
					</Label>
					<Label>
						<TextLables>Post</TextLables>
						<TextArea
							as="textarea"
							value={props.body}
							name="body"
							onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
								props.setBody(event.target.value)}
							required
						/>
					</Label>
					<Button as="button" type="submit">
						Submit
					</Button>
				</InputWrapper>
			</FormField>
		</FormWrapper>
	);
};
