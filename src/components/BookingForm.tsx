"use client";

import { useState, type FormEvent } from "react";

const spaces = ["The Courtyard", "The Grove Community Room", "Upper-Level Studios", "Full building"];
const eventTypes = [
  "Reception",
  "Launch or press event",
  "Private party",
  "Workshop or class",
  "Exhibition",
  "Other",
];

function fieldClass() {
  return "w-full border border-black/20 bg-white px-4 py-3 text-sm text-black outline-none focus:border-black";
}

export default function BookingForm() {
  const [space, setSpace] = useState(spaces[0]);
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");
  const [summary, setSummary] = useState<{ date: string; guests: string; type: string; name: string } | null>(
    null,
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setSummary({
      date: String(form.get("date") || "your preferred date"),
      guests: String(form.get("guests") || "an unspecified number of"),
      type: String(form.get("type") || "Other"),
      name: String(form.get("name") || "there"),
    });
    setReference(
      "TF-" + Math.floor(1000 + Math.random() * 9000).toString(),
    );
    setSubmitted(true);
  }

  if (submitted && summary) {
    return (
      <div className="border border-black bg-white p-8 sm:p-12">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Request received
        </p>
        <h3 className="mt-3 font-display text-3xl font-medium text-black">
          Thanks, {summary.name.split(" ")[0] || "there"}.
        </h3>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
          We have your request to hold <span className="font-medium text-black">{space}</span>{" "}
          for <span className="font-medium text-black">{summary.guests}</span> guests on{" "}
          <span className="font-medium text-black">{summary.date}</span> ({summary.type}). Someone
          from the building will follow up by email within one business day to confirm
          availability and next steps.
        </p>
        <p className="mt-6 text-xs font-medium uppercase tracking-widest text-muted">
          Reference {reference}
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 border border-black px-6 py-3 text-xs font-medium uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white"
        >
          Start a new request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-black bg-white p-8 sm:p-12">
      <p className="text-xs font-medium uppercase tracking-widest text-accent">Request availability</p>
      <h3 className="mt-3 font-display text-3xl font-medium text-black">Tell us about your event.</h3>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
        This is a preview request, not a live reservation. Submit it and someone from the
        building will reach out directly to confirm details and pricing.
      </p>

      <fieldset className="mt-8">
        <legend className="text-xs font-medium uppercase tracking-widest text-black">Space</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {spaces.map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => setSpace(s)}
              className={`border px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors ${
                space === s
                  ? "border-black bg-black text-white"
                  : "border-black/20 text-black hover:border-black"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-widest text-black">Event date</span>
          <input required type="date" name="date" className={`mt-2 ${fieldClass()}`} />
        </label>
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-widest text-black">Guest count</span>
          <input
            required
            type="number"
            name="guests"
            min={1}
            placeholder="e.g. 80"
            className={`mt-2 ${fieldClass()}`}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-medium uppercase tracking-widest text-black">Event type</span>
          <select required name="type" defaultValue="" className={`mt-2 ${fieldClass()}`}>
            <option value="" disabled>
              Select one
            </option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-widest text-black">Name</span>
          <input required type="text" name="name" className={`mt-2 ${fieldClass()}`} />
        </label>
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-widest text-black">Email</span>
          <input required type="email" name="email" className={`mt-2 ${fieldClass()}`} />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-medium uppercase tracking-widest text-black">
            Anything else we should know
          </span>
          <textarea
            name="message"
            rows={4}
            placeholder="Catering needs, load-in times, whether you'd like art or music involved"
            className={`mt-2 resize-none ${fieldClass()}`}
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-8 w-full border border-black bg-black px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black sm:w-auto"
      >
        Request availability
      </button>
    </form>
  );
}
