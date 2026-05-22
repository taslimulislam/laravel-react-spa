import { useState } from 'react'
import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { NewPuppyForm } from '@/components/NewPuppyForm'
import { PageWraper } from '@/components/PageWraper'
import { PuppiesList } from '@/components/PuppiesList'
import { Search } from '@/components/Search'
import { Shortlist } from '@/components/ShortList'
import { Puppy } from '@/types'

export default function App({puppies}: {puppies: Puppy[]}) {
  
  return (
    <PageWraper>
      <Container>
        <Header />
          {/* <pre>{JSON.stringify(puppies, null, 2)}</pre> */}
          <Main pups={puppies} />
      </Container>
    </PageWraper>
  )
}


function Main({ pups }: { pups: Puppy[] }) {

  
  const[searchQuery, setSearchQuery] = useState<string>('');
  const [puppies, setPuppies] = useState<Puppy[]>(pups); 
  return (
    <main>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <Shortlist puppies={puppies} setPuppies={setPuppies} />
      </div>
      <PuppiesList searchQuery={searchQuery} puppies={puppies} setPuppies={setPuppies}/>
      <NewPuppyForm puppies={puppies} setPuppies={setPuppies}/>
    </main>
  )
}
