import React from 'react'
import { marketplaceListings } from './listings'
import ListingCard from '@/app/marketplace/listing'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { FormLabel } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ListingsPage() {
  return (
    <div className='p-12'>
        <h2 className='text-2xl'>My Listings</h2>
        <Separator className='my-4'/>
        <div className='flex justify-between items-end space-x-4 mb-4'>
            <div className='w-full'>
                <Label className='mb-2 text-italic'>Search</Label>
                <Input placeholder='Search for your listings' />
            </div>
            <Link href="/admin/listings/create">
                <Button>Create</Button>
            </Link>
        </div>
        {marketplaceListings && (
            <div className="mx-auto w-[480px]">
            {marketplaceListings.map((listing) => (
                <div key={listing.id}>
                    <ListingCard key={listing.id} listing={listing} show={false} />
                </div>
            ))}
            </div>
        )}
    </div>
  )
}
