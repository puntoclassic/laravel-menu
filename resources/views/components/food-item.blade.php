<div class="flex flex-row">
    <div class="w-3/4">
        <div class="flex flex-col">
            <div> {{ $item->name }}</div>
            @if ($item->ingredients != null)
                <div class="font-extralight text-sm">{{ $item->ingredients }}</div>
            @endif
        </div>
    </div>
    <div class="w-1/4">
        <div class="flex justify-end items-center space-x-2">
            <span class="font-light antialiased"> {{ number_format($item->price, 2) }} €</span>
            <form method="post" class="m-0" action="{{ route('cart.add_item') }}">
                @csrf
                <input type="hidden" name="food_id" value="{{ $item->id }}" />
                <input type="hidden" name="food_name" value="{{ $item->name }}" />
                <input type="hidden" name="food_price" value="{{ $item->price }}" />
                <button class="p-2 bg-gray-300 hover:text-white hover:bg-gray-700 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                        <path
                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                </button>
            </form>

        </div>
    </div>
</div>
