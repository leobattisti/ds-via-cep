import * as requestService from './request-service.js'
import Addres from '../models/adress.js';

export async function findByCep(cep){

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const result = await requestService.getJson(url);

    const addres = new Addres(result.cep, result.logradouro, null, result.localidade);

    return addres;
}