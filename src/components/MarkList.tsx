/**
 * @name MarkList
 * @description
 * @author beiysd
 */

'use client'

import { MarkItem } from '@/utils'
import { fetchAddMark, fetchDeleteMark, fetchMarkList } from '@/utils/serves/home-api'
import { useMutation, useQuery } from '@tanstack/react-query'

export default function MarkList() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['fetchMarkList'],
    queryFn: fetchMarkList,
  })

  const deleteMutation = useMutation({ mutationFn: fetchDeleteMark })
  const addMutation = useMutation({ mutationFn: fetchAddMark })

  const deleteClick = async (id: string) => {
    await deleteMutation.mutate(id, {
      onSuccess: () => {
        refetch()
      },
    })
  }
  const addClick = async () => {
    const title = `test ${Math.random()}`
    const url = `https://www.baidu.com/${Math.random()}`
    await addMutation.mutate(
      { title, url },
      {
        onSuccess: () => {
          refetch()
        },
      },
    )
  }
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error...</div>
  return (
    <div className=''>
      <div className='flex py-[20px]'>
        <button className='mr-[20px] rounded-lg bg-sky-500/100 px-[4px]' onClick={() => refetch()}>
          Get All
        </button>
        <button className='mr-[20px] rounded-lg bg-sky-500/100 px-[4px]' onClick={() => addClick()}>
          Add Mark
        </button>
      </div>
      {data?.map((item: MarkItem, index: number) => (
        <div key={'marklist-' + index} className='mb-[20px] rounded-lg bg-sky-500/100 p-[10px]'>
          <p>title: {item?.title}</p>
          <p>url: {item?.url}</p>
          <button className='rounded-lg bg-pink-500 px-[4px]' onClick={() => deleteClick(item?.id)}>
            delete
          </button>
        </div>
      ))}
    </div>
  )
}
