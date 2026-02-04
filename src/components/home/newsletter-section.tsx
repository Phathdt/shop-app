import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/**
 * Newsletter subscription section
 * - Responsive form layout (stacked mobile, side-by-side desktop)
 * - Primary background with centered content
 * - Email input validation and submission handling
 */
export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email) return

    setIsSubmitting(true)

    // TODO: Implement newsletter subscription API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      console.log("Newsletter subscription:", email)
      setEmail("")
    } catch (error) {
      console.error("Subscription failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-primary text-primary-foreground py-16 px-4">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold mb-3">Subscribe to our Newsletter</h2>
        <p className="mb-6 opacity-90">
          Get the latest updates on new products and upcoming sales.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white text-gray-900"
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            variant="secondary"
            disabled={isSubmitting}
            className="whitespace-nowrap"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  )
}
