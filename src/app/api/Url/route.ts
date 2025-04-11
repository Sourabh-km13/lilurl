import { UrlShortener } from "@/services/UrlShortenService";
import { NextResponse } from "next/server";
import { cache } from "react";

const fetchUrls = (async ()=>{
    const shortenerService = new UrlShortener();
    const response = await shortenerService.getAllUrls();
    return response;
})
export async function GET (){
    const urls = await fetchUrls();
    const response =NextResponse.json({urls});
    response.headers.set('Cache-control','public, max-age=60,s-maxage=3600 stale-while-revalidate=59');
    return response;
}