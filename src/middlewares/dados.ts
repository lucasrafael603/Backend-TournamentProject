import {Request, Response, NextFunction} from 'express'


export default function dados(request : Request, response: Response, next : NextFunction){

  const { url, method } = request


  console.log(`[${method.toUpperCase()}] ${url}`)


  return next()


}