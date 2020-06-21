<?php


namespace App\Faker;

use Faker\Generator;
use Faker\Provider\Base;
use Illuminate\Support\Facades\Storage;

class Logo extends Base
{
    private array $repository;
    private static $instance = null;
    
    public static function getInstance(Generator $generator, string $repositoryPath)
    {
        if (is_null(self::$instance)) {
            self::$instance = new self($generator);
            self::$instance->repository = Storage::files($repositoryPath);
        }
        return self::$instance;
    }

    /**
     * @param string $destPath
     * @return string
     */
    public function logo(string $destPath): string
    {
        $cnt = count($this->repository);
        $ind = rand(0, $cnt - 1);

        $destination = $destPath . "/". basename($this->repository[$ind]);
        if (Storage::disk('root')->missing("public/{$destination}")) {
            Storage::disk('root')->copy(
                "storage/app/{$this->repository[$ind]}",
                "public/{$destination}"
            );
        }
        return "/" . $destination;
    }
}
