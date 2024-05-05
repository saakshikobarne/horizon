import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from "@/components/TotalBalanceBox"

const Home = () => {

  const loggedIn = {firstName: "saakshi"}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="welcome"
            user= {loggedIn?.firstName || "guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1234.67}
          />
        </header>
      </div>
    </section>
  )
}

export default Home