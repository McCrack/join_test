<?php

namespace App\Http\Controllers;

use App\Company;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\CompanyRequest;
use Illuminate\Http\Response;

use App\Faker\Logo as Faker;

class CompaniesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Company::orderBy('id', 'desc')->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CompanyRequest $request
     * @return JsonResponse
     */
    public function store(CompanyRequest $request): JsonResponse
    {
        $company = new Company;
        $company->fill($request->all());
        $company->logo = Faker::getInstance(
            new \Faker\Generator,
            'repository/svg'
        )->logo('storage');

        $company->save();

        return response()->json($company, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $company = Company::find($id);
        $company->employees;
        return $company;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CompanyRequest $request
     * @param int $id
     * @return Response
     */
    public function update(CompanyRequest $request, $id)
    {
        $company = Company::find($id);
        $company->fill($request->all());
        $company->save();

        return response(null, 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        Company::find($id)->delete();
        return response(null, 205);
    }
}
