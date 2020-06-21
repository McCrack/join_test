<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Faker\Logo;
use App\Company as Model;
use Faker\Generator as Faker;

$factory->define(Model::class, function (Faker $faker) {

	$faker->addProvider(Logo::getInstance($faker, 'repository/svg'));

    return [
        'name' => $faker->unique()->company,
        'email' =>  $faker->unique()->companyEmail,
        'website' => "https://{$faker->unique()->domainName}",
        //'logo' => $faker->imageUrl('public/storage',100,100, null, false, false),
        'logo' => $faker->logo('storage'),
    ];
});
