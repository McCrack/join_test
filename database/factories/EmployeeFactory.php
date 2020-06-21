<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Employee as Model;
use Faker\Generator as Faker;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'company_id' => rand(1, 10),
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'phone' => $faker->tollFreePhoneNumber,
        'email' =>  $faker->email,
    ];
});
