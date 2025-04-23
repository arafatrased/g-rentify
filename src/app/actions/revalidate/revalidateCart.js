'use server'

import { revalidatePath } from 'next/cache'

export async function revalidateCart() {
  revalidatePath('/mycart') // or any route you want to revalidate
}