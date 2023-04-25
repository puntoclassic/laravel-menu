@extends('layouts')

@section('title', 'Ordini')

@section('header')
    <x-header></x-header>
@endsection

@section('topbar')
    <x-topbar>
        <x-topbar-left>
            <x-global-search-form></x-global-search-form>
        </x-topbar-left>
        <x-topbar-right>
            <x-account-manage></x-account-manage>
        </x-topbar-right>
    </x-topbar>
@endsection



@section('content')
    <x-breadcrumb>
        <li class="breadcrumb-item">
            <a class='text-light' href="{{ route('account.dashboard') }}">Profilo</a>
        </li>
        <li class="breadcrumb-item active text-light" aria-current="page">Amministrazione Ordini</li>
    </x-breadcrumb>
    <x-messages></x-messages>
    <div class="row g-0">
        <div class="col-lg-12 ms-4">
            <h4>Ordini</h4>
        </div>
    </div>
    <div
        class="row g-0 bg-light ms-4 me-4 mb-4 p-2 rounded-2 shadow-sm d-flex flex-row justify-content-end align-items-center">
        <div class="col-lg-9 mt-md-0">
            <a class="btn btn-secondary text-decoration-none" href="{{ route('admin.order.create') }}">Crea ordine</a>
        </div>
        <div class="col-lg-3 mt-3 mt-md-0">
            <form class="m-0">
                <div class="input-group">
                    <input type="text" class="form-control" name="search" placeHolder="Cerca un ordine"
                        value="{{ request('search') }}">
                    <button type="submit" class="btn btn-primary">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>
    <div class="row g-0 ms-4 me-4">
        <table class="table table-striped align-middle">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Stato</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Totale</th>
                    <th scope="col">Pagato</th>
                    <th class="text-center" scope="col">Azioni</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($items as $item)
                    <tr>
                        <td class="">{{ $item->id }}</td>
                        <td>{{ $item->orderStatus }}</td>
                        <td>{{ $item->user->firstname }}, {{ $item->user->lastname }}</td>
                        <td>{{ number_format($item->subTotal, 2) }} €</td>
                        <td>
                            @if ($item->isPaid)
                                Pagato
                            @else
                                Non pagato
                            @endif
                        </td>
                        <td class="text-center">
                            <a href="{{ route('admin.order.edit', ['order' => $item->id]) }}">Modifica</a>
                            <a href="{{ route('admin.order.delete', ['order' => $item->id]) }}">Elimina</a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>

    <div class="row g-0 ps-4 pe-4">
        <div class="col-lg-3">
            <x-select-per-page :elementsPerPage=$elementsPerPage></x-select-per-page>
        </div>
    </div>
    <div class="row g-0 ps-4 pe-4">
        {{ $items->appends(request()->input())->links() }}
    </div>
@endsection
