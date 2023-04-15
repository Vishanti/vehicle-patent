import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

@Injectable()
export class APIInvoke {
    constructor(private httpService: HttpService) { }

    get(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse> {
        return new Promise<AxiosResponse>((resolve, reject) => {
            this.httpService.get(url, options).subscribe({
                next: (res) => {
                    resolve(res);
                },
                error: (error: any) => {
                    reject(error);
                },
            });
        });
    }

    post(
        url: string,
        request: any,
        options?: AxiosRequestConfig,
    ): Promise<AxiosResponse> {
        return new Promise<AxiosResponse>((resolve, reject) => {
            this.httpService.post(url, request, options).subscribe({
                next: (res) => {
                    resolve(res);
                },
                error: (error: any) => {
                    reject(error);
                },
            });
        });
    }

    patch(
        url: string,
        request: any,
        options?: AxiosRequestConfig,
    ): Promise<AxiosResponse> {
        return new Promise<AxiosResponse>((resolve, reject) => {
            this.httpService.patch(url, request, options).subscribe({
                next: (res) => {
                    resolve(res);
                },
                error: (error: any) => {
                    reject(error);
                },
            });
        });
    }

    delete(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse> {
        return new Promise<AxiosResponse>((resolve, reject) => {
            this.httpService.delete(url, options).subscribe({
                next: (res) => {
                    resolve(res);
                },
                error: (error: any) => {
                    reject(error);
                },
            });
        });
    }
}
