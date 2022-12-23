import React from 'react'
import { PageMenu } from '../../components/PageMenu/PageMenu'
import { Search } from '../../components/search/Search'
import { UserStats } from '../../components/userStats/UserStats'
import "./UserList.scss"

export const UserList = () => {
  return (
    <section>
        <div className='container '>

            <PageMenu/>
            <UserStats/> 

            <div className='user-list'>
                <div className='--flex-between'>

                    <span>
                    <h3>All Users</h3>
                    </span>

                    <span>
                        <Search/>
                    </span>

                </div>
            </div>

        </div>
    </section>
  )
}
