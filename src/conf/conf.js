const conf = {
  appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
  appwriteProject: String(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID),
  appwriteDataBaseId: String(import.meta.env.VITE_APP_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APP_APPWRITE_BUCKET_ID),
};

export default conf;
