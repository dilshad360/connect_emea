import { uploadFile } from '@/config/supabase';

const handleImageUpload = async (file, folder, fileName) => {
    if (!file) return null;
    try {
        const publicUrl = await uploadFile(`${folder}`, file, fileName);
        return publicUrl;
    } catch (error) {
        console.error("Error uploading image to Supabase:", error);
        return null;
    }
};

export default handleImageUpload;