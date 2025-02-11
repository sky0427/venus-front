export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

export type IUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
};

export type INewPost = {
  userId: string;
  title: string;
  caption: string;
  file: File[];
  originalUrl: string;
  location?: string;
  tags?: string;
};

export type IUpdatePost = {
  postId: string;
  title: string;
  caption: string;
  imageId: string;
  imageUrl: URL;
  file: File[];
  originalUrl: string;
  location?: string;
  tags?: string;
};

export type IUser = {
  id: string;
  nickname: string;
  email: string;
  profileUrl: string;
  role: string;
};

export type INewUser = {
  nickname: string;
  email: string;
  password: string;
};
