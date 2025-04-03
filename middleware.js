import { NextResponse } from "next/server";

export function middleware(request){
    if(request.nextUrl.pathname.startsWith('/#')){
        return NextResponse.redirect(new URL('/#skills', request.url))
    }
}