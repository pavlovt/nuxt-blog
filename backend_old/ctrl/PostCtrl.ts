import {JsonController, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import model from '../models/Post';

@JsonController()
export default class PageCtrl {

    @Get("/posts")
    getAll() : any {
      return model.query();
    }

    @Get("/posts/:id")
    getOne(@Param("id") id: number): any {
       return model.query().findById(id);
    }

    @Post("/posts")
    post(@Body() data: any): any {
      console.log('data!!!!!!', data)
       return model.query().insert(data);
    }
}