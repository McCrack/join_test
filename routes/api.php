<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});


Route::prefix('auth')->group(function ($router) {
	//Route::post('register', 'AuthController@register');
	Route::post('login', 'AuthController@login');

	Route::get('refresh', 'AuthController@refresh')->middleware('jwt.refresh');

	Route::middleware('jwt.auth')->group(function(){
		//Route::get('user', 'AuthController@user');
		Route::post('logout', 'AuthController@logout');
	});
});


Route::middleware('jwt.auth')->group(function(){
	Route::apiResources([
		'companies' => 'CompaniesController',
		'employees' => 'EmployeesController',
	]);
});

Route::get('dictionary/{lang}', function($lang){
    $path = resource_path("lang/{$lang}/front.php");
    if (is_readable($path)) {
        $dictionary = include($path);
    }
    return $dictionary ?? [];
});
