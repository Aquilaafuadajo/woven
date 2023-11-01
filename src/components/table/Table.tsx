import type { FunctionalComponent } from 'vue'
import { TableConfig } from '@/types/table.type'

export const Table: FunctionalComponent<TableConfig> = (props) => {
  return (
    <table class="rounded-xl bg-white px-8 pb-6 pt-7 min-w-[75rem] md:min-w-full ">
      <thead>
        <tr class="text-left border-b border-b-gray-100">
          {props.tableHeaders.map((header, idx) =>
            !header.render ? (
              <th
                key={idx}
                class="text-xs text-black-400 font-black capitalize pt-7 pb-4 first:pt-7 first:pl-8 first:pb-4"
              >
                {header.title}
              </th>
            ) : (
              <th class="text-xs text-black-400 font-black capitalize pt-7 pb-4 first:pt-7 first:pl-8 first:pb-4">
                {header.render()}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row, idx) => (
          <tr
            onClick={(row) => props.onRowClick(row)}
            key={idx}
            class="cursor-pointer hover:opacity-70 last:hover:opacity-100 even:bg-black-50"
          >
            {props.tableColumns.map((col, id) =>
              !col.render ? (
                <td key={id} class="first:pl-8 first:py-[0.88rem]">
                  <p class="text-sm font-medium text-black-500">{row[col.dataIndex]}</p>
                </td>
              ) : (
                <td key={id} class="first:pl-8 first:py-[0.88rem]">
                  {col.render(row)}
                </td>
              )
            )}
          </tr>
        ))}
        <tr class="border-t border-t-gray-100">
          {props.tableColumns.map((col, id) =>
            id !== props.tableColumns.length - 1 ? (
              <td></td>
            ) : (
              <td class="pr-8 py-6">
                <button class="text-xs font-black underline text-red-700 uppercase">
                  see all {props.name}
                </button>
              </td>
            )
          )}
        </tr>
      </tbody>
    </table>
  )
}
