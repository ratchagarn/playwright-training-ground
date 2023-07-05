import PageTitle from 'components/PageTitle'
import SectionTitle from 'components/SectionTitle'

const IndexPage = () => {
  return (
    <>
      <PageTitle>Welcome to Playwright Training Ground</PageTitle>

      <p className="mb-4">
        With this, you will learn how to test websites with Playwright in many
        different ways.
      </p>

      <SectionTitle>Topic</SectionTitle>
      <p className="mb-4">Coming soon...</p>

      <SectionTitle>
        <span className="text-red-500">For Test (localstorage: auth)</span>
      </SectionTitle>
      <pre className="rounded bg-gray-200 p-4">
        <code>
          {JSON.stringify(window.localStorage.getItem('auth'), null, 2)}
        </code>
      </pre>
    </>
  )
}

export default IndexPage
