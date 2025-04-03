"use server"
import React from "react";
import fs from "fs/promises"

export const submitAction = async(e)=> {
    console.log(e.get("name"),"\n",e.get("email"),"\n",e.get("message"),"\n",)    
    fs.appendFile("ClientData.txt",`${e.get("name")} \t ${e.get("email")} \t ${e.get("message")}\n`)
}