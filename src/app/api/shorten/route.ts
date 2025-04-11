import { UrlShortener } from "@/services/UrlShortenService";
import { NextResponse } from "next/server";

export async function POST (req:Request){

    const {originalUrl} = await  req.json();
    console.log(originalUrl,'data received');
    
    const shortenerService = new UrlShortener();

    console.log('shorten service created');
    
    const shortUrl = await shortenerService.shortenUrl(originalUrl);
    return NextResponse.json({shortUrl},{status:201});
}
