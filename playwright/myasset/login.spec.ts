import {test,expect } from '@playwright/test'

test('test login success',async({page})=>{
         await page.goto('https://app.myassets.com/auth/login');
         await page.getByPlaceholder('Email Address').fill('myademonumber8@gmail.com');
         await page.getByPlaceholder('Password').fill('Myatesting#');
         await page.getByRole('button',{name:'Sign in',exact:true}).click();
})