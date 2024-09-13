import { Request, Response } from 'express';
import Post, { IComment } from '../models/Post';
import mongoose, { Connection, set } from 'mongoose';

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const author = (req as any).userId;
    const newPost = new Post({ title, content, author });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
} catch (error: any) {
    res.status(400).json({ message: 'Error creating post', error });
  }
  }

// Add updatePost function
export const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const author = (req as any).userId;
    const updatedPost = await Post.findOneAndUpdate(
      { _id: id, author },
      req.body,
      { new: true }
    );
    if (!updatedPost) return res.status(404).json({ message: 'Post not found or unauthorized' });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: 'Error updating post', error });
  }
};

export const deletePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting post', error });
    }
};

export const addComment = async (req: Request, res: Response) => {
    try {
      const { content } = req.body;
      const author = (req as any).userId;
      const { id } = req.params; // Post ID
  
      const post = await Post.findById(id);
      if (!post) return res.status(404).json({ message: 'Post not found' });
  
      post.comments.push({
          author,
          content,
          date: new Date(),
          _id: new mongoose.Types.ObjectId(),
          $assertPopulated: function <Paths = {}>(path: string | string[], values?: Partial<Paths> | undefined): Omit<IComment, keyof Paths> & Paths {
              throw new Error('Function not implemented.');
          },
          $clearModifiedPaths: function (): IComment {
              throw new Error('Function not implemented.');
          },
          $clone: function (): IComment {
              throw new Error('Function not implemented.');
          },
          $createModifiedPathsSnapshot: function (): mongoose.ModifiedPathsSnapshot {
              throw new Error('Function not implemented.');
          },
          $getAllSubdocs: function (): mongoose.Document[] {
              throw new Error('Function not implemented.');
          },
          $ignore: function (path: string): void {
              throw new Error('Function not implemented.');
          },
          $isDefault: function (path: string): boolean {
              throw new Error('Function not implemented.');
          },
          $isDeleted: function (val?: boolean): boolean {
              throw new Error('Function not implemented.');
          },
          $getPopulatedDocs: function (): mongoose.Document[] {
              throw new Error('Function not implemented.');
          },
          $inc: function (path: string | string[], val?: number): IComment {
              throw new Error('Function not implemented.');
          },
          $isEmpty: function (path: string): boolean {
              throw new Error('Function not implemented.');
          },
          $isValid: function (path: string): boolean {
              throw new Error('Function not implemented.');
          },
          $locals: {},
          $markValid: function (path: string): void {
              throw new Error('Function not implemented.');
          },
          $model: function <ModelType = mongoose.Model<unknown, {}, {}, {}, mongoose.Document<unknown, {}, unknown> & { _id: mongoose.Types.ObjectId; }, any>>(name?: string): ModelType {
              throw new Error('Function not implemented.');
          },
          $op: null,
          $restoreModifiedPathsSnapshot: function (snapshot: mongoose.ModifiedPathsSnapshot): IComment {
              throw new Error('Function not implemented.');
          },
          $session: function (session?: mongoose.ClientSession | null): mongoose.ClientSession | null {
              throw new Error('Function not implemented.');
          },
          $set: function (path: string | Record<string, any>, val: any, type?: any, options?: mongoose.DocumentSetOptions): IComment {
              throw new Error('Function not implemented.');
          },
          $where: {},
          collection: mongoose.connection.collection('comments'),
          db: new Connection,
          deleteOne: function (options?: mongoose.QueryOptions) {
              throw new Error('Function not implemented.');
          },
          depopulate: function (path?: string | string[]): IComment {
              throw new Error('Function not implemented.');
          },
          directModifiedPaths: function (): Array<string> {
              throw new Error('Function not implemented.');
          },
          equals: function (doc: mongoose.Document<unknown, any, any>): boolean {
              throw new Error('Function not implemented.');
          },
          get: function <T extends string | number | symbol>(path: T, type?: any, options?: any) {
              throw new Error('Function not implemented.');
          },
          getChanges: function (): mongoose.UpdateQuery<IComment> {
              throw new Error('Function not implemented.');
          },
          increment: function (): IComment {
              throw new Error('Function not implemented.');
          },
          init: function (obj: mongoose.AnyObject, opts?: mongoose.AnyObject): IComment {
              throw new Error('Function not implemented.');
          },
          invalidate: function <T extends string | number | symbol>(path: T, errorMsg: string | NativeError, value?: any, kind?: string): NativeError | null {
              throw new Error('Function not implemented.');
          },
          isDirectModified: function <T extends string | number | symbol>(path: T | T[]): boolean {
              throw new Error('Function not implemented.');
          },
          isDirectSelected: function <T extends string | number | symbol>(path: T): boolean {
              throw new Error('Function not implemented.');
          },
          isInit: function <T extends string | number | symbol>(path: T): boolean {
              throw new Error('Function not implemented.');
          },
          isModified: function <T extends string | number | symbol>(path?: T | T[] | undefined, options?: { ignoreAtomics?: boolean; } | null): boolean {
              throw new Error('Function not implemented.');
          },
          isNew: false,
          isSelected: function <T extends string | number | symbol>(path: T): boolean {
              throw new Error('Function not implemented.');
          },
          markModified: function <T extends string | number | symbol>(path: T, scope?: any): void {
              throw new Error('Function not implemented.');
          },
          model: function <ModelType = mongoose.Model<unknown, {}, {}, {}, mongoose.Document<unknown, {}, unknown> & { _id: mongoose.Types.ObjectId; }, any>>(name?: string): ModelType {
              throw new Error('Function not implemented.');
          },
          modifiedPaths: function (options?: { includeChildren?: boolean; }): Array<string> {
              throw new Error('Function not implemented.');
          },
          overwrite: function (obj: mongoose.AnyObject): IComment {
              throw new Error('Function not implemented.');
          },
          $parent: function (): mongoose.Document | undefined {
              throw new Error('Function not implemented.');
          },
          populate: function <Paths = {}>(path: string | mongoose.PopulateOptions | (string | mongoose.PopulateOptions)[]): Promise<mongoose.MergeType<IComment, Paths>> {
              throw new Error('Function not implemented.');
          },
          populated: function (path: string) {
              throw new Error('Function not implemented.');
          },
          replaceOne: function (replacement?: mongoose.AnyObject, options?: mongoose.QueryOptions | null): mongoose.Query<any, IComment, {}, unknown, 'find', Record<string, never>> {
              throw new Error('Function not implemented.');
          },
          save: function (options?: mongoose.SaveOptions): Promise<IComment> {
              throw new Error('Function not implemented.');
          },
          schema: new mongoose.Schema({ content: String, author: mongoose.Types.ObjectId, date: Date }),
          set: function (path: string | Record<string, any>, val: any, type?: any, options?: mongoose.DocumentSetOptions): IComment {
              throw new Error('Function not implemented.');
          },
          set: function (path: string | Record<string, any>, val: any, type: any, options?: mongoose.DocumentSetOptions): IComment {
              throw new Error('Function not implemented.');
          },
          set: function (path: string | Record<string, any>, val: any, options?: mongoose.DocumentSetOptions): IComment {
              throw new Error('Function not implemented.');
          },
              },
              set: function (path: string | Record<string, any>, val: any, type: any, options?: mongoose.DocumentSetOptions): IComment {
                  throw new Error('Function not implemented.');
              },
              set: function (path: string | Record<string, any>, val: any, options?: mongoose.DocumentSetOptions): IComment {
                  throw new Error('Function not implemented.');
              },
              set: function (path: string | Record<string, any>, val: any, type: any, options?: mongoose.DocumentSetOptions): IComment {
                  throw new Error('Function not implemented.');
              },
              set: function (path: string | Record<string, any>, val: any, options?: mongoose.DocumentSetOptions): IComment {
                  throw new Error('Function not implemented.');
              },
          toJSON: function (options?: mongoose.ToObjectOptions & { flattenMaps?: boolean; }): mongoose.FlattenMaps<any> {
              throw new Error('Function not implemented.');
          },
          toObject: function (options?: mongoose.ToObjectOptions) {
              throw new Error('Function not implemented.');
          },
          unmarkModified: function (path: string | number | symbol): void {
              throw new Error('Function not implemented.');
          },
          updateOne: function (update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<IComment> | undefined, options?: mongoose.QueryOptions | null): mongoose.Query<any, IComment, {}, unknown, 'find', Record<string, never>> {
              throw new Error('Function not implemented.');
          },
          // Removed unnecessary validate function

      });
      await post.save();
  
      res.status(201).json({ message: 'Comment added' });
    } catch (error) {
      res.status(400).json({ message: 'Error adding comment', error });
    }
  };

  export const getPosts = async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = 5; // Number of posts per page
      const skip = (page - 1) * limit;
  
      const posts = await Post.find().skip(skip).limit(limit).sort({ date: -1 });
      const total = await Post.countDocuments();
  
      res.status(200).json({
        posts,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
      });
    } catch (error) {
      res.status(400).json({ message: 'Error fetching posts', error });
    }
  };