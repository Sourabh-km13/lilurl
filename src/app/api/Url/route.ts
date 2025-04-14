import { UrlShortener } from "@/services/UrlShortenService";
import { NextResponse } from "next/server";


const fetchUrls = (async ()=>{
    const shortenerService = new UrlShortener();
    const response = await shortenerService.getAllUrls();
    return response;
})
export async function GET (){
    const urls = await fetchUrls();
    const response =NextResponse.json({urls});
    return response;
}