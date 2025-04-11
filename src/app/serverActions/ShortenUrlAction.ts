import { UrlShortener } from "@/services/UrlShortenService";

export const shortenUrl  = async(formData : FormData)=>{
    'use server '
    const originalUrl = formData.get('OriginalUrl') as string;
    console.log('original url passed', originalUrl);
    const shortenerService = new UrlShortener();
    const response = await shortenerService.shortenUrl(originalUrl);
    
}