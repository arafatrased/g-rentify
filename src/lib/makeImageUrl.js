"use server";

export default async function imageUrl(image) {
  const api_key = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
  const formData = new FormData();
  formData.append('image', image);

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${api_key}`, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();
  if (data.success) {
    return data.data.url; // ✅ Return uploaded image URL
  } else {
    throw new Error('Image upload failed');
  }
}