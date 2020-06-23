<?php

namespace App\Observers;

use App\Company;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewCompanyMail;


class CompanyObserver
{
    public function saved(Company $company)
    {
        Mail::to($company)->send(new NewCompanyMail($company));

    }
}
