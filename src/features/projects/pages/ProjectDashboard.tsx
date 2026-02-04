import { useParams } from 'react-router-dom'

export default function ProjectDashboard() {
  const { projectId } = useParams()

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Project Dashboard</h1>
        <p className="text-muted-foreground">Project ID: {projectId}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          Dashboard coming soon...
        </p>
      </div>
    </div>
  )
}
