import {JsonController, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import model from '../models/Page';

@JsonController()
export default class PageCtrl {

    @Get("/pages")
    getAll() : any {
      return model.query();
    }

    @Get("/pages/:id")
    getOne(@Param("id") id: number): any {
       return model.query().findById(id);
    }

    @Post("/pages")
    post(@Body() data: any): any {
       return model.query().insert(data);
    }
}