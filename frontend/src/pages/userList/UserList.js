import React from 'react'
import { PageMenu } from '../../components/PageMenu/PageMenu'
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
                    <h3></h3>
                </div>
            </div>

        </div>
    </section>
  )
}
