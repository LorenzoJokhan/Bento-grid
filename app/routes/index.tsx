import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Index() {
  return (
    <main>
      <section className="grid-container">
        <article className="flex flex-col justify-center card p-4 bg-accent-light">
          <h1 className="text-3xl mb-2">
            Create and schedule content{" "}
            <span className="text-primary">quicker</span>:
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
          <h1 className="text-3xl font-semibold">Schedule to social media</h1>
          <div className="w-[300px]">
            <img src="/public/images/illustration-schedule-posts.webp" />
          </div>
          <p>
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </article>

        <article className="card p-4 bg-accent">
          <h1 className="text-3xl mb-10">
            Write your <br />
            content using
            <br /> AI
          </h1>
          <img src="/images/illustration-ai-content.webp" />
        </article>

        <article className="card p-4">
          <img
            className="w-[200px] mb-1"
            src="/public/images/illustration-multiple-platforms.webp"
          />
          <p className="text-3xl">Maintain multiple accounts and platforms</p>
        </article>

        <article className="card p-4 bg-accent overflow-hidden">
          <p className="text-3xl mb-4">
            Maintain a consistent posting schedule
          </p>
          <img
            className="w-[200px] mb-1"
            src="/public/images/illustration-consistent-schedule.webp"
          />
        </article>
        <article className="card p-4">
          <h1 className="text-3xl">
            <code>&#62;</code> 56%
          </h1>
          <p className="text-xs mb-6">Faster Audience growth</p>
          <img
            className="h-12 mb-1"
            src="/public/images/illustration-audience-growth.webp"
          />
        </article>

        <article className="flex items-center card p-4 text-white bg-primary">
          <img
            className="w-1/2 mb-1"
            src="/public/images/illustration-grow-followers.webp"
          />
          <h1 className="text-3xl">Grow followers with non-stop content.</h1>
        </article>
      </section>
    </main>
  );
}
