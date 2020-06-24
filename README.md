<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="300"></p>
<ol>
<li>
<p>Клонировать проект</p>
<pre>
<code>
 git clone https://github.com/McCrack/join_test.git
</code>
</pre>		
</li>
<li>
<p>Установить зависимости</p>
<pre>
<code>
 composer install	
</code>
</pre>
</li>
<l>
<p>Создать базу данных. Периеменовать файл .env.example в .env и отредактировать его прописав параметры подключениЯ к БД</p>
</l>
<li>
<p>Выполнить миграции</p>
<ul>
<li>
В задании количество компаний и сотрудников совпадает (по 10 000). Возможно это опечатка, в реализации создается одна тысяча компаний.
При необходимости - изменить количество в файле <code>database/seeds/CompanySeeder.php</code> Тогда в файле <code>database/factories/EmployeeFactory.php</code>
Указать новое максималное значение для поля <code>company_id</code>
</li>
</ul>
<pre>
<code>
 php artisan migrate --seed
</code>
</pre>
</li>
<li>
<p>
Создать ссылку на storage
<pre>
<code>
 php artisan storage:link
</code>
</pre>
</p>
</li>
</ol>
<hr>
<p>
Для вход используйте логин - <code>admin@admin.com</code> и пароль - <code>password</code>
</p>
