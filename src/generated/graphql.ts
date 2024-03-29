import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddAuthorResponse = IMutationsResponse & {
  __typename?: 'AddAuthorResponse';
  author?: Maybe<Author>;
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type AddBookResponse = IMutationsResponse & {
  __typename?: 'AddBookResponse';
  book?: Maybe<Book>;
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type AddPublisherReponse = IMutationsResponse & {
  __typename?: 'AddPublisherReponse';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
  publisher?: Maybe<Publisher>;
  success: Scalars['Boolean']['output'];
};

export type Author = {
  __typename?: 'Author';
  books?: Maybe<Array<Maybe<Book>>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Author>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Publisher>;
  title?: Maybe<Scalars['String']['output']>;
};

export type IMutationsResponse = {
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create */
  addAuthor?: Maybe<AddAuthorResponse>;
  addBook?: Maybe<AddBookResponse>;
  addPublisher?: Maybe<AddPublisherReponse>;
  /** Delete */
  deleteAuthor?: Maybe<MutationsResponse>;
  deleteBook?: Maybe<MutationsResponse>;
  deletePublisher?: Maybe<MutationsResponse>;
  /** Update */
  updateAuthor?: Maybe<MutationsResponse>;
  updateBook?: Maybe<MutationsResponse>;
  updatePublisher?: Maybe<MutationsResponse>;
};


export type MutationAddAuthorArgs = {
  name: Scalars['String']['input'];
};


export type MutationAddBookArgs = {
  authorId: Scalars['String']['input'];
  pubId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationAddPublisherArgs = {
  name: Scalars['String']['input'];
};


export type MutationDeleteAuthorArgs = {
  authorId: Scalars['String']['input'];
};


export type MutationDeleteBookArgs = {
  bookId: Scalars['String']['input'];
};


export type MutationDeletePublisherArgs = {
  pubId: Scalars['String']['input'];
};


export type MutationUpdateAuthorArgs = {
  authorId: Scalars['String']['input'];
  input: UpdateAuthorInput;
};


export type MutationUpdateBookArgs = {
  bookId: Scalars['String']['input'];
  input: UpdateBookInput;
};


export type MutationUpdatePublisherArgs = {
  input: UpdatePublisherInput;
  pubId: Scalars['String']['input'];
};

export type MutationsResponse = IMutationsResponse & {
  __typename?: 'MutationsResponse';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Publisher = {
  __typename?: 'Publisher';
  books?: Maybe<Array<Maybe<Book>>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors?: Maybe<Array<Maybe<Author>>>;
  /** Get */
  book?: Maybe<Book>;
  /** List */
  books?: Maybe<Array<Maybe<Book>>>;
  publisher?: Maybe<Publisher>;
  publishers?: Maybe<Array<Maybe<Publisher>>>;
};


export type QueryAuthorArgs = {
  authorID: Scalars['String']['input'];
};


export type QueryBookArgs = {
  bookId: Scalars['String']['input'];
};


export type QueryPublisherArgs = {
  pubId: Scalars['String']['input'];
};

export type UpdateAuthorInput = {
  name: Scalars['String']['input'];
};

export type UpdateBookInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePublisherInput = {
  name: Scalars['String']['input'];
};

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  IMutationsResponse: ( AddAuthorResponse ) | ( AddBookResponse ) | ( AddPublisherReponse ) | ( MutationsResponse );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddAuthorResponse: ResolverTypeWrapper<AddAuthorResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  AddBookResponse: ResolverTypeWrapper<AddBookResponse>;
  AddPublisherReponse: ResolverTypeWrapper<AddPublisherReponse>;
  Author: ResolverTypeWrapper<Author>;
  Book: ResolverTypeWrapper<Book>;
  IMutationsResponse: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['IMutationsResponse']>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationsResponse: ResolverTypeWrapper<MutationsResponse>;
  Publisher: ResolverTypeWrapper<Publisher>;
  Query: ResolverTypeWrapper<{}>;
  updateAuthorInput: UpdateAuthorInput;
  updateBookInput: UpdateBookInput;
  updatePublisherInput: UpdatePublisherInput;
  AdditionalEntityFields: AdditionalEntityFields;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddAuthorResponse: AddAuthorResponse;
  String: Scalars['String']['output'];
  Boolean: Scalars['Boolean']['output'];
  AddBookResponse: AddBookResponse;
  AddPublisherReponse: AddPublisherReponse;
  Author: Author;
  Book: Book;
  IMutationsResponse: ResolversInterfaceTypes<ResolversParentTypes>['IMutationsResponse'];
  Mutation: {};
  MutationsResponse: MutationsResponse;
  Publisher: Publisher;
  Query: {};
  updateAuthorInput: UpdateAuthorInput;
  updateBookInput: UpdateBookInput;
  updatePublisherInput: UpdatePublisherInput;
  AdditionalEntityFields: AdditionalEntityFields;
};

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']['input']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String']['input'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']['input']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']['input']>;
};

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = { };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']['input']>;
};

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = { };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {
  path: Scalars['String']['input'];
};

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddAuthorResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddAuthorResponse'] = ResolversParentTypes['AddAuthorResponse']> = {
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddBookResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddBookResponse'] = ResolversParentTypes['AddBookResponse']> = {
  book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddPublisherReponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddPublisherReponse'] = ResolversParentTypes['AddPublisherReponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publisher?: Resolver<Maybe<ResolversTypes['Publisher']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publisher?: Resolver<Maybe<ResolversTypes['Publisher']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IMutationsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['IMutationsResponse'] = ResolversParentTypes['IMutationsResponse']> = {
  __resolveType: TypeResolveFn<'AddAuthorResponse' | 'AddBookResponse' | 'AddPublisherReponse' | 'MutationsResponse', ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addAuthor?: Resolver<Maybe<ResolversTypes['AddAuthorResponse']>, ParentType, ContextType, RequireFields<MutationAddAuthorArgs, 'name'>>;
  addBook?: Resolver<Maybe<ResolversTypes['AddBookResponse']>, ParentType, ContextType, RequireFields<MutationAddBookArgs, 'authorId' | 'pubId' | 'title'>>;
  addPublisher?: Resolver<Maybe<ResolversTypes['AddPublisherReponse']>, ParentType, ContextType, RequireFields<MutationAddPublisherArgs, 'name'>>;
  deleteAuthor?: Resolver<Maybe<ResolversTypes['MutationsResponse']>, ParentType, ContextType, RequireFields<MutationDeleteAuthorArgs, 'authorId'>>;
  deleteBook?: Resolver<Maybe<ResolversTypes['MutationsResponse']>, ParentType, ContextType, RequireFields<MutationDeleteBookArgs, 'bookId'>>;
  deletePublisher?: Resolver<Maybe<ResolversTypes['MutationsResponse']>, ParentType, ContextType, RequireFields<MutationDeletePublisherArgs, 'pubId'>>;
  updateAuthor?: Resolver<Maybe<ResolversTypes['MutationsResponse']>, ParentType, ContextType, RequireFields<MutationUpdateAuthorArgs, 'authorId' | 'input'>>;
  updateBook?: Resolver<Maybe<ResolversTypes['MutationsResponse']>, ParentType, ContextType, RequireFields<MutationUpdateBookArgs, 'bookId' | 'input'>>;
  updatePublisher?: Resolver<Maybe<ResolversTypes['MutationsResponse']>, ParentType, ContextType, RequireFields<MutationUpdatePublisherArgs, 'input' | 'pubId'>>;
};

export type MutationsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationsResponse'] = ResolversParentTypes['MutationsResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublisherResolvers<ContextType = any, ParentType extends ResolversParentTypes['Publisher'] = ResolversParentTypes['Publisher']> = {
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<QueryAuthorArgs, 'authorID'>>;
  authors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Author']>>>, ParentType, ContextType>;
  book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QueryBookArgs, 'bookId'>>;
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType>;
  publisher?: Resolver<Maybe<ResolversTypes['Publisher']>, ParentType, ContextType, RequireFields<QueryPublisherArgs, 'pubId'>>;
  publishers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Publisher']>>>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AddAuthorResponse?: AddAuthorResponseResolvers<ContextType>;
  AddBookResponse?: AddBookResponseResolvers<ContextType>;
  AddPublisherReponse?: AddPublisherReponseResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  IMutationsResponse?: IMutationsResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationsResponse?: MutationsResponseResolvers<ContextType>;
  Publisher?: PublisherResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};

import { ObjectId } from 'mongodb';