import { UrlShortener } from "@/services/UrlShortenService";
import { redirect } from "next/navigation";

async function fetchOriginalUrl(shortUrl:string){
    const urlService = new UrlShortener();
    const response = await urlService.getUrlByShortUrl(shortUrl);
    return response?.originalUrl
}

export default async function urlRedirect ({params}:{params:{id:string}}){
    const {id} = params;
    console.log(id);
    
    const originalUrl = await fetchOriginalUrl(`urls/${id}`);
    if(originalUrl)
        redirect(originalUrl as unknown as string);
    redirect('/404')
    
    return null;
}  