<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\CompanyRequest;
use Illuminate\Http\Response;

class EmployeesController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param CompanyRequest $request
     * @return JsonResponse
     */
    public function store(CompanyRequest $request): JsonResponse
    {
        $employee = new Employee();
        $employee->fill($request->all());

        $employee->save();

        return response()->json($employee, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        return Employee::find($id);
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
        $employee = Employee::find($id);
        $employee->fill($request->all());
        $employee->save();

        return response(null, 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        Employee::find($id)->delete();
        return response(null, 205);
    }
}
