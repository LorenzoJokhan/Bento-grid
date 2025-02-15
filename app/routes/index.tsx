import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  return {};
}

export default function Index() {
  return (
    <main>
      <section className="grid-container">
        <article className="flex flex-col justify-center card p-4 bg-accent-light">
          <h1 className="mb-6">
            Create and schedule content{" "}
            <span className="text-primary italic">quicker</span>:
          </h1>
          <button className="font-bold bg-accent hover:bg-amber-500 cursor-pointer py-3 px-4 rounded-full">
            Create post
          </button>
        </article>

        <article className="flex flex-col items-center justify-center gap-4 card bg-primary text-white">
          <section>
            <h1 className="text-4xl">Social Media 10x </h1>
            <p className="text-4xl">Faster with AI</p>
          </section>

          <section>
            <img
              className="w-[200px] mb-1"
              src="/images/illustration-five-stars.webp"
            />
            <p>Over 4000 5-star reviews</p>
          </section>
        </article>

        <article className="flex flex-col justify-between card bg-primary-light p-4  overflow-hidden">
          <h2 className="font-semibold">Schedule to social media</h2>
          <div className="w-[300px]">
            <img src="/images/illustration-schedule-posts.webp" />
          </div>
          <p>
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </article>

        <article className="card p-4 bg-accent">
          <h1 className="mb-10">
            Write your <br />
            content using
            <br /> AI
          </h1>
          <img src="/images/illustration-ai-content.webp" />
        </article>

        <article className="card p-4">
          <img
            className="w-[200px] mb-1"
            src="/images/illustration-multiple-platforms.webp"
          />
          <h2>Manage multiple accounts and platforms</h2>
        </article>

        <article className="card p-4 bg-accent overflow-hidden">
          <h2 className="mb-4">Maintain a consitent posting schedule</h2>
          <img
            className="w-[200px] mb-1"
            src="/images/illustration-consistent-schedule.webp"
          />
        </article>
        <article className="card p-4">
          <h1>
            <code>&#62;</code> 56%
          </h1>
          <p className="text-xs mb-6">Faster Audience growth</p>
          <img
            className="h-12 mb-1"
            src="/images/illustration-audience-growth.webp"
          />
        </article>

        <article className="flex items-center card p-4 text-white bg-primary">
          <img
            className="w-1/2 mb-1"
            src="/images/illustration-grow-followers.webp"
          />
          <h1>Grow followers with non-stop content.</h1>
        </article>
      </section>
    </main>
  );
}
