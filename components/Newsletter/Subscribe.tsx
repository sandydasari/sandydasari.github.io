import { useState } from "react";
import { newsletter, profile } from "../../utils/site-data";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if (newsletter.action) {
      try {
        await fetch(newsletter.action, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ email }).toString(),
        });
      } catch {
        /* no-cors: response is opaque; assume accepted */
      }
    } else {
      // Static-site fallback: the visitor emails me to subscribe.
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        "Subscribe to your newsletter"
      )}&body=${encodeURIComponent(`Please add ${email} to your list.`)}`;
    }
    setDone(true);
  };

  return (
    <div className="border border-AAborder rounded-2xl bg-AAsurface/40 p-5 sm:p-6">
      <h3 className="font-serif text-lg font-medium text-AAtext tracking-tight">Subscribe</h3>
      <p className="text-AAmuted text-[13px] leading-relaxed mt-1.5 max-w-sm">
        New writing on AI agents — what works, what breaks, the tricks that failed and the ones
        that stuck — straight to your inbox. No spam, no scams, no selling your email. Unsubscribe anytime.
      </p>

      {done ? (
        <p className="mt-4 text-[13px] text-AAtext font-medium">Thanks — you're on the list.</p>
      ) : (
        <form onSubmit={onSubmit} className="mt-4 flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            aria-label="Email address"
            className="flex-1 bg-AAprimary border border-AAborder rounded-lg px-3 py-2 text-[13px] text-AAtext placeholder:text-AAmuted outline-none focus:border-AAborder-strong transition-colors"
          />
          <button
            type="submit"
            className="bg-AAtext text-AAprimary px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-[13px] font-medium whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
