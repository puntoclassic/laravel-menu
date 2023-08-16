import AdminDeleteButton from "@react-src/pages/admin/components/AdminDeleteButton";
import AdminEditButton from "@react-src/pages/admin/components/AdminEditButton";
import route from "ziggy-js";

export default function AdminOrderRow({ item }: any) {

    return <>
        <tr className="h-10 w-full odd:bg-gray-100 flex-row flex flex-grow">
            <td className="w-1/12 flex items-center justify-center">{item.id}</td>
            <td className="w-5/12 lg:w-6/12 flex items-center text-clip">{item.user.firstname} {item.user.lastname}</td>
            <td className="hidden lg:flex lg:w-1/12 items-center justify-center">{item.order_status.name}</td>
            <td className="w-1/12 flex items-center justify-center">{item.total.toFixed(2)} €</td>
            <td
                className="w-3/12 flex flex-row space-x-2 items-center content-center justify-center">
                <AdminEditButton link={route("admin.order.edit", { id: item.id })}></AdminEditButton>
                <AdminDeleteButton link={route("admin.order.delete", { id: item.id })}></AdminDeleteButton>
            </td>
        </tr >
    </>
}


/**
 *
 * <td class="w-1/12 flex items-center justify-center">{{order.id}}</td>
<td class="w-5/12 lg:w-3/12 flex items-center text-clip">{{order.user.firstname}} {{order.user.lastname}}
</td>
<td class="hidden lg:flex lg:w-2/12 items-center justify-start">{{order.orderState.name }}</td>
<td class="w-2/12 flex items-center justify-center">{{order.total | priceOutput}}</td>
<td class="w-3/12 flex flex-row space-x-2 items-center content-center justify-center">

    <button class="flex flex-row space-x-2 items-center justify-center p-2 hover:bg-green-700 hover:text-white"
        [routerLink]="['modifica',order.id]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
        <span class="hidden md:block">Modifica</span>
    </button>
    <button class="flex flex-row space-x-2 items-center justify-center p-2 hover:bg-red-700 hover:text-white"
        [routerLink]="['elimina',order.id]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
        <span class="hidden md:block">Elimina</span></button>
</td>

 */
