'use server'
import { UrlShortener } from "@/services/UrlShortenService";
import { revalidatePath } from "next/cache";

export const shortenUrl  = async(prevState:any ,formData : FormData):Promise<String>=>{

    const originalUrl = formData.get('originalUrl') as string;
    console.log('original url passed', originalUrl);
    const shortenerService = new UrlShortener();
    const response = await shortenerService.shortenUrl(originalUrl);
    revalidatePath('/urls')
    return response as string
}