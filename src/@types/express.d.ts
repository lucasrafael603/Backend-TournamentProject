//import {Request} from 'express'

// declare namespace Express{
//   export interface Request{
//     user: {
//       id: string
//     }
//   }
// }

declare namespace Express {
  export interface Request {
      user: any;
  }
  export interface Response {
      user: any;
  }
}


// import {Request} from "express"

// export interface AuthRequest extends Request {
//     user?: string
// }