@extends('layouts')

@section('title', 'Carrello')

@section('topbar')
<x-topbar>
    <x-topbar-left>
    </x-topbar-left>
    <x-topbar-right>
        <x-cart-button></x-cart-button>
        <x-login></x-login>
    </x-topbar-right>
</x-topbar>
@endsection



@section('header')
<x-header></x-header>
@endsection

@section('nav')
<x-category-list></x-category-list>
@endsection

@section('content')
<div class="row g-0">
    <div class="col-lg-12 p-4">
        <div class="col-lg-12 flex-grow-1">
            @if(session('cart') && session('cart')["items"])
            <div class="row g-0">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Cibo</th>
                            <th class="text-center" scope="col">Quantità</th>
                            <th class="text-center" scope="col">Prezzo</th>
                            <th class="text-center" scope="col">Azioni</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($cart["items"] as $item)
                        <x-cart-table-row :item="$item"></x-cart-table-row>
                        @endforeach
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td class="text-center"><b>Totale</b></td>
                            <td class="text-center">{{number_format(session('cart')["subtotal"],2)}} €</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="row g-0">
                <div class="col-lg-4">
                    <a class="btn btn-success" href="{{route('checkout.step1')}}">Vai alla cassa</a>
                </div>
            </div>
            @else
            <div class="row g-0">
                <p>Non ci sono elementi nel carrello</p>
            </div>
            @endif
        </div>
    </div>
</div>
@endsection