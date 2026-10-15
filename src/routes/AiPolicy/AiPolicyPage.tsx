import PolicyDocument, { PolicySection } from '../../components/PolicyDocument/PolicyDocument';
import Brackets from '../../components/UI/Brackets/Brackets';
import PostCard from '../../components/UI/PostCard/PostCard';
import ExternalLinkButton from '../../components/UI/ExternalLinkButton/ExternalLinkButton';
import { CONTACT_EMAIL } from '../../SITE';

const SITE_REPO = 'https://github.com/ToasterCat/tc-portfolio-site';

const SECTIONS: PolicySection[] = [
  { id: 'note', label: 'A Note' },
  { id: 'pragmatic', label: 'Morality and Pragmatism' },
  { id: 'consent', label: 'Consent', sub: true },
  { id: 'ownership', label: 'Ownership', sub: true },
  { id: 'process', label: 'Reliability', sub: true },
  { id: 'methodology', label: 'Our Methodology' },
  { id: 'roles', label: 'Roles', sub: true },
  { id: 'placeholders', label: 'Placeholders', sub: true },
  { id: 'writing', label: 'Writing', sub: true },
  { id: 'quarantine', label: 'Sandboxing', sub: true },
  { id: 'policy', label: 'Our Policy' },
  { id: 'tenets', label: 'Core Tenets', sub: true },
  { id: 'in-house', label: 'In-House Projects', sub: true },
  { id: 'client', label: 'Client Projects', sub: true },
  { id: 'questions', label: 'Questions' },
];

/**
 * AI usage policy, in two halves. Above the divider: why we hold the position
 * we do (personal note, the moral, legal, and practical case, then the
 * methodology that puts it into practice). Below it: the policy itself,
 * plainly stated: the core tenets, then the do/don't lists. "Skip to our
 * policy" jumps the gap.
 */
export default function AiPolicyPage() {
  return (
    <PolicyDocument
      title="AI Usage Policy"
      description="Where ToasterCat Studios uses AI, where it never does, and how we keep creative work and your IP human-made."
      updated="2026-10-14"
      sections={SECTIONS}
    >
      <p>
        AI tools are in nearly every corner of tech now. If you’re trusting us with your
        project, you have a right to know whether we use them, how, and where we never will.
      </p>
      <p>
        The short version: we use AI for the short game (grunt code, debugging, testing,
        compliance checks, paperwork, and placeholders) so our people can spend their time on
        everything else. <strong>Creative work is made by creative people.</strong>
      </p>
      {/* For the skimmers: straight to the punchline. */}
      <p>
        <a className="btn btn--tertiary" href="#policy">
          <Brackets>Skip to our policy ↓</Brackets>
        </a>
      </p>

      {/* LOCKED: Dirk's personal statement. Formatting only - do not edit the
          wording; changes come from Dirk. */}
      <PostCard
        id="note"
        name="Dirk Hortensius"
        role="Founder, Sr. Engineer @ ToasterCat Studios"
        tag="Personal note"
      >
        <p>
          I hate the term “AI”.
        </p>
        <p>
          There’s nothing particularly intelligent about it. I'm saying this as someone who was building
          “AI” systems back when we called these statistical average machines Machine Learning [ML]
          and Natural Language Processing [NLP]. The architectures and mathematics have improved
          enormously, but today’s Large Language Models [LLMs] are still fundamentally prediction
          machines: extraordinarily optimized offspring of <a href="https://www.youtube.com/watch?v=ACmydtFDTGs" target="_blank" rel="noopener noreferrer">“Hotdog
          / Not hotdog”</a> and “next word predictors” — finally fed enough data, GPUs, datacenters,
          and money to talk back.
        </p>
        <p>
          But damn, are they useful hot dog machines.
        </p>
        <p>
          I’ve spent more late evenings than I care to remember hunting down memory leaks, build
          failures, dependency conflicts, linker errors, and deployment failures. These types of
          issues aren’t necessarily more difficult than stomping out any other bug, but they’re
          tedious, inconsistent, and won’t teach you anything useful once solved. LLM-based coding
          assistants eat these bugs for breakfast &mdash; along with boilerplate code, test cases, dependency
          upgrades, documentation, and other well-scoped engineering chores. <strong>Let the bots
          have it</strong>; I won’t become a better engineer by discovering that a deployment failed
          because an obscure dependency pulled in a version of Node that conflicts with a specific flavor
          of Docker in our staging environment.
        </p>
        <p>
          The same goes for status reports, emails, and corporate “synergy-ese”. I’m perfectly happy
          to let a bot turn my engineering bullet points into a respectable public statement.
        </p>
        <p>
          The problem of “AI brain rot” starts when users stop using LLMs as a tool and elect to
          outsource their thinking and judgement entirely. Let an LLM design an entire codebase and
          sooner or later you’ll end up making a monster: a system nobody actually understands; an
          instant legacy horror that can only be maintained by inefficiently feeding the codebase
          back through another model. Vibe-coded apps are cute until somebody has to change, debug,
          secure, or operate them six months later. Take it from an AWS DevOps veteran: anyone
          responsible for maintaining a system needs to understand it inside and out or eventually
          you’re going to have a very bad and very expensive day.
        </p>
        <p>
          I follow a fairly simple rule: <strong>only use AI for the short game</strong>. I use it
          to eliminate frustration, investigate bugs, generate boilerplate, summarize information,
          and accelerate mundane work. I do not outsource architecture, technical ownership, product
          judgement, or understanding to what is ultimately just an intern-bot.
        </p>
        <p>
          Generative art is a very different story. As a musician and a certified soul-bearing
          human, I have yet to see or hear any generative AI output that moves me. That is a meager
          reward for technology built on top of what can legitimately be argued as theft from artists
          who did not meaningfully consent for their work to be used as training material. Even without
          controversy, AI “art” only really remains useful for soulless corporate clip art, stock imagery,
          concepts, and placeholders.
        </p>
        <p>
          I hire artists for their individual tastes, perspectives, and talents. I hire engineers
          who can provide novel, out-of-the-box solutions to hard problems with a vision for scale.
          Those are simply not things a statistical average hot dog machine can provide. No one
          wants to look at art drawn by a statistical mean. Nobody wants to play a game designed by
          a next word predictor — or at least I certainly don’t.
        </p>
        <p>
          So my policy is not “AI good” or “AI bad”. My policy is to use AI like any other automation tool
          &mdash; <strong>to clear my schedule of mundane bullsh*t</strong>. I'll use it where speed
          beats elegance and where I, an informed and accountable human, still own the result. I do
          not and will not use it as a substitute for engineering judgment, product design, artistic
          direction, or creative ownership.
        </p>
        <p>
          Media doesn’t become “slop” just because a bot was involved. It’s slop because nobody
          cared enough to make something good.
        </p>
        {/* Signature, mirroring email sign-off. */}
        <p className="meta post-card-signature">
          Regards;
          <br />
          <br />
          <span aria-hidden="true">{'\\>'}</span> Dirk
          <br />
          <span aria-hidden="true">|-</span> Founder, Sr. Engineer @ ToasterCat Studios
        </p>
      </PostCard>


      {/* The reasoning, before the rules it leads to. */}
      <h2 id="pragmatic">Morality and Pragmatism</h2>
      <p>
        Our position isn’t anti-technology, and it isn’t hype. It rests on three things: what’s
        fair to the people whose work these tools learned from, what you can legally own, and
        what actually holds up once a product ships.
      </p>

      <h3 id="consent">Consent: Art Comes from Artists</h3>
      <p>
        <strong>
          We never sell generated art or media, and we never use AI to mimic another
          creator’s work.
        </strong>
      </p>
      <p>
        Many of the best-known image, music, and voice generators were trained on creators’ work,
        scraped from the internet without their knowledge or consent, and several now face
        lawsuits over it. The US Copyright Office has found that training on copyrighted work
        qualifies as fair use in some cases but not others, and the courts are still sorting it
        out. We won’t build products on that, for ourselves or for clients.
      </p>
      <div className="policy-sources">
        <p className="meta meta-dim policy-sources-label">Sources</p>
        <ol>
          <li>
            <a href="https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-3-Generative-AI-Training-Report-Pre-Publication-Version.pdf" target="_blank" rel="noopener noreferrer">
              Copyright and Artificial Intelligence, Part 3: Generative AI Training
            </a>
            <span className="meta meta-dim">U.S. Copyright Office, May 2025 (pre-publication)</span>
          </li>
          <li>
            <a href="https://itsartlaw.org/art-law/artificial-intelligence-and-artists-intellectual-property-unpacking-copyright-infringement-allegations-in-andersen-v-stability-ai-ltd/" target="_blank" rel="noopener noreferrer">
              AI and Artists’ IP: Andersen v. Stability AI
            </a>
            <span className="meta meta-dim">Center for Art Law</span>
          </li>
        </ol>
      </div>

      <h3 id="ownership">Ownership: You Should Own What You Pay For</h3>
      <p>
        US copyright requires a human author. The Copyright Office won’t register AI-generated
        material without meaningful human authorship, and the courts have upheld that. In a
        larger work, the AI-generated parts must be disclosed and excluded at registration, and
        they stay unprotected: gaps in what you actually own. Keeping generated art and media out
        of creative deliverables keeps the work you pay for yours.
      </p>
      <div className="policy-sources">
        <p className="meta meta-dim policy-sources-label">Sources</p>
        <ol>
          <li>
            <a href="https://www.copyright.gov/ai/ai_policy_guidance.pdf" target="_blank" rel="noopener noreferrer">
              Copyright Registration Guidance: Works Containing Material Generated by Artificial Intelligence
            </a>
            <span className="meta meta-dim">U.S. Copyright Office, March 2023</span>
          </li>
          <li>
            <a href="https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf" target="_blank" rel="noopener noreferrer">
              Copyright and Artificial Intelligence, Part 2: Copyrightability
            </a>
            <span className="meta meta-dim">U.S. Copyright Office, January 2025</span>
          </li>
          <li>
            <a href="https://www.copyright.gov/ai/docs/court-of-appeals-decision-affirming-refusal-of-registration.pdf" target="_blank" rel="noopener noreferrer">
              Thaler v. Perlmutter
            </a>
            <span className="meta meta-dim">U.S. Court of Appeals, D.C. Circuit, March 2025</span>
          </li>
          <li>
            <a href="https://www.copyright.gov/docs/zarya-of-the-dawn.pdf" target="_blank" rel="noopener noreferrer">
              Zarya of the Dawn registration decision
            </a>
            <span className="meta meta-dim">U.S. Copyright Office, February 2023</span>
          </li>
        </ol>
      </div>

      <h3 id="process">Reliability: Know Your Own Tools</h3>
      <p>
        Engineers and creators need to own the process at every stage. At the ephemeral layers
        (boilerplate, test cases, bug hunts, Photoshop’s tools, cleaning up 3D topology), AI
        tools unlock real productivity without taking away anyone’s vision, ownership, or agency.
      </p>
      <p>
        Let an LLM govern an entire project, though, and you get a technical behemoth that nobody
        on the team understands but everyone has to maintain. LLMs are non-deterministic (ask the
        same question twice, get two different answers), and their accuracy measurably degrades as
        their context expands in complexity, which is exactly what happens as a project grows. Every future change
        means another trip through the big expensive machine, slower and less safely each time.
      </p>
      <p>
        We’ve already seen how that ends. An AI agent on Replit wiped a company’s live database
        during a code freeze, then faked records to cover it. Amazon’s own AI coding tool
        reportedly took an AWS service down for 13 hours. In one 2025 study, experienced developers
        using AI tools took 19% longer on their tasks while believing they were working faster. Automation
        nobody understands doesn’t make a product stronger; it makes it fragile.
      </p>
      <div className="policy-sources">
        <p className="meta meta-dim policy-sources-label">Sources</p>
        <ol>
          <li>
            <a href="https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/" target="_blank" rel="noopener noreferrer">
              Vibe coding service Replit deleted user’s production database
            </a>
            <span className="meta meta-dim">The Register, July 2025</span>
          </li>
          <li>
            <a href="https://www.engadget.com/ai/13-hour-aws-outage-reportedly-caused-by-amazons-own-ai-tools-170930190.html" target="_blank" rel="noopener noreferrer">
              13-hour AWS outage reportedly caused by Amazon’s own AI tools
            </a>
            <span className="meta meta-dim">Engadget, reporting the Financial Times, February 2026</span>
          </li>
          <li>
            <a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener noreferrer">
              Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity
            </a>
            <span className="meta meta-dim">METR, July 2025</span>
          </li>
          <li>
            <a href="https://www.trychroma.com/research/context-rot" target="_blank" rel="noopener noreferrer">
              Context Rot: How Increasing Input Tokens Impacts LLM Performance
            </a>
            <span className="meta meta-dim">Chroma Research, July 2025</span>
          </li>
          <li>
            <a href="https://arxiv.org/abs/2307.03172" target="_blank" rel="noopener noreferrer">
              Lost in the Middle: How Language Models Use Long Contexts
            </a>
            <span className="meta meta-dim">Liu et al., Transactions of the ACL, 2024</span>
          </li>
        </ol>
      </div>

      {/* Principles above; how they work on a real project below. */}
      <h2 id="methodology">Our Methodology</h2>
      <p>
        Principles only matter if they survive a real project. Here’s how ours work day to day.
      </p>

      <h3 id="roles">Know Your Role: Humans Lead, Agents Extend</h3>
      <p>
        We treat our agents like interns and our engineers like executives. A person chooses the
        framework and language, sets the architecture and design patterns, organizes the code,
        and defines its conventions and style: the decisions everything else is built on, where
        experience and judgment matter most.
      </p>
      <p>
        Coding agents work inside those decisions, never above them. Once a foundation exists and
        works, an agent can extend it with features in established patterns, tests, and tooling.
        It never picks the stack, invents the structure, or sets the style, and a person reviews
        every change it makes.
      </p>
      <p>
        This site is a working example. Our engineers chose React and TypeScript, laid out its
        files and directories, set its naming conventions and style, and chose to host it on
        Vercel. The site was up and running before we brought in an AI coding assistant to help
        refactor, restyle, and extend it along those established patterns. Much of our prose and
        copy was initially drafted with the help of an agent, but it always falls to a human to
        edit, approve, and own the result.
      </p>
      <p>
        <ExternalLinkButton linkTo={SITE_REPO} text="ToasterCat/tc-portfolio-site" icon="logo-github" />
      </p>

      <h3 id="placeholders">Placeholders, Not Product</h3>
      <p>
        There’s one place for generated art and media in our work: as placeholders, the stand-ins
        and pre-visualization that hold a layout or an idea together until the real thing arrives.
      </p>
      <p>
        Most of the time we don’t need them: our drafts use assets we already have, made in-house
        or properly licensed. When we do use one, it’s tagged as a placeholder the moment it
        enters the project, tracked until it’s replaced, and checked again before every release.
        Nothing tagged ships. Playtest builds may still contain tagged placeholders; when they
        do, we’ll say so.
      </p>
      <p>
        These tools learned from other people’s work, which is exactly why their output never
        becomes the thing you pay for. <strong>No generated art or media ships in a final
        revision we sell.</strong>
      </p>

      <h3 id="writing">Writing: Authorship vs. Paperwork</h3>
      <p>
        Writing is an art form of its own. Stories, scripts, lyrics, and narrative design are
        authored by people, never generated, and we don’t offer copywriting or storytelling as a
        service.
      </p>
      <p>
        Most of what our studio writes is paperwork: exchange-of-service agreements, definitions
        of done, grant applications, design briefs, documentation, and correspondence. There we
        routinely use AI to draft, structure, and tighten. It’s precise, well-scoped work in a
        corporate tone, exactly what these tools are good at.
      </p>
      <p>
        That writing ships once a person has reviewed, approved, and taken ownership of every
        word. Anything with legal weight gets a line-by-line human read before anyone signs it.
      </p>

      <h3 id="quarantine">Sandboxing and Quarantine</h3>
      <p>
        Where copyright and ownership matter, we insulate your IP from AI tooling and the
        ownership questions it brings.
      </p>
      <p>
        Code, art, and other assets critical to your IP are <strong>quarantined</strong>: written
        by hand, start to finish, with only mechanical, deterministic tooling. That covers core
        architecture, key gameplay and engine features, and art.
      </p>
      <p>
        When most of a codebase counts as IP, we flip the default: everything is quarantined,
        and AI-assisted work is <strong>sandboxed</strong> into clearly bounded sections that
        aren’t.
      </p>
      <p>
        Quarantined code is separated in the codebase, and every change to it is reviewed and
        attributed to the person who wrote it. That record of who wrote what is what copyright
        registration and any ownership question come down to. Mechanical changes (formatting,
        renames, version bumps) are applied with deterministic tools, never generated, and tagged
        to keep the record clean. AI can help test, document, and debug quarantined code, but it
        never writes the fix.
      </p>
      <div className="policy-sources">
        <p className="meta meta-dim policy-sources-label">Sources</p>
        <ol>
          <li>
            <a href="https://www.sidley.com/en/insights/publications/2026/09/legal-considerations-and-best-practices-for-ai-assisted-software-development" target="_blank" rel="noopener noreferrer">
              Legal Considerations and Best Practices for AI Assisted Software Development
            </a>
            <span className="meta meta-dim">Sidley Austin LLP, September 2026</span>
          </li>
          <li>
            <a href="https://www.mbhb.com/intelligence/snippets/navigating-the-legal-landscape-of-ai-generated-code-ownership-and-liability-challenges/" target="_blank" rel="noopener noreferrer">
              Navigating the Legal Landscape of AI-Generated Code: Ownership and Liability Challenges
            </a>
            <span className="meta meta-dim">McDonnell Boehnen Hulbert &amp; Berghoff LLP, May 2025</span>
          </li>
          <li>
            <a href="https://docs.kernel.org/process/coding-assistants.html" target="_blank" rel="noopener noreferrer">
              AI Coding Assistants
            </a>
            <span className="meta meta-dim">The Linux Kernel documentation</span>
          </li>
        </ol>
      </div>

      {/* THE DIVISION: everything above frames and justifies; everything below
          just states where we stand. "Skip to our policy" lands here. */}
      <hr className="policy-divider" />
      <h2 id="policy" className="policy-division">
        <span className="meta meta-dim policy-division-prompt" aria-hidden="true">
          {'\\>'}
        </span>
        Our Policy
      </h2>
      <p className="policy-division-lede">
        Here’s where we draw the line. Bots get the short game; people manage them and build
        everything that needs soul, originality, or character.
      </p>

      {/* The whole page in six lines; the do/don't lists below apply them. */}
      <h3 id="tenets">Core Tenets</h3>
      <ol className="policy-tenets">
        <li>
          <strong>Creative work is made by creative people.</strong> Generated art and media are
          placeholders only, and we never sell them as a product.
        </li>
        <li>
          <strong>Humans lead, agents extend.</strong> People make the decisions a project is built
          on (architecture, design patterns, and product design) and solve its hard problems; AI
          works inside those decisions, never in place of the people who make them.
        </li>
        <li>
          <strong>People own every result.</strong> A person reviews, approves, and answers for
          everything AI touches.
        </li>
        <li>
          <strong>Your IP stays human-made.</strong> The code and assets that define your product
          are quarantined: hand-written and AI-free.
        </li>
        <li>
          <strong>No imitation, no leaks.</strong> We never prompt AI to mimic a creator, and never
          put confidential material into tools that keep or train on it.
        </li>
        <li>
          <strong>You’ll always know.</strong> We tell you where AI is part of our workflow, and
          keep it off your project entirely if you ask.
        </li>
      </ol>

      <h3 id="in-house">In-House Projects</h3>
      <div className="policy-rules">
        <div className="policy-rule policy-rule--do">
          <p className="tag policy-rule-label">Do</p>
          <ul>
            <li>Use AI coding assistants to review, refactor, and debug code.</li>
            <li>Use AI to help code well-defined features that follow established patterns.</li>
            <li>Use AI for deep research, documentation, and talking through technical problems.</li>
            <li>Use AI to track security, accessibility, and legal compliance.</li>
            <li>Draft marketing copy, correspondence, and emails with AI, then edit and approve them ourselves.</li>
            <li>
              Draft contracts and project documents with AI: exchange-of-service agreements,
              definitions of done, grant applications, and design briefs.
            </li>
            <li>
              Generate placeholders or pre-visualization only when no existing asset fits, tagged and
              tracked until they’re replaced.
            </li>
            <li>Have a person review and test every AI-assisted change before it ships.</li>
          </ul>
        </div>
        <div className="policy-rule policy-rule--dont">
          <p className="tag tag--signal policy-rule-label">Don’t</p>
          <ul>
            <li>Ship generated art, animation, music, sound, voices, or narrative writing in a finished product.</li>
            <li>Use AI to write quarantined code: the systems that define our proprietary IP.</li>
            <li>Prompt AI to imitate another creator’s style or work.</li>
            <li>Pass off AI output as hand-made.</li>
          </ul>
        </div>
      </div>

      <h3 id="client">Client Projects</h3>
      <div className="policy-rules">
        <div className="policy-rule policy-rule--do">
          <p className="tag policy-rule-label">Do</p>
          <ul>
            <li>
              Use AI where it makes your project faster and sturdier: debugging, test coverage, and
              security, accessibility, and legal compliance checks.
            </li>
            <li>
              Use generated placeholders only when no existing asset fits, each clearly marked,
              tracked, and replaced before final delivery.
            </li>
            <li>Draft project paperwork with AI, reviewed and approved by a person before it reaches you.</li>
            <li>
              Where ownership matters to you, quarantine the parts of your project you’ll own as IP:
              hand-written, AI-free, and written into your agreement and definition of done.
            </li>
            <li>Tell you up front where AI tools are part of our workflow.</li>
            <li>Have an engineer review, test, and take responsibility for every line we deliver.</li>
            <li>Keep AI tools off your project entirely, if you ask.</li>
          </ul>
        </div>
        <div className="policy-rule policy-rule--dont">
          <p className="tag tag--signal policy-rule-label">Don’t</p>
          <ul>
            <li>
              Sell you generated art or media. None of it ships in a final revision: not artwork,
              animation, music, characters, or any other IP you need to own.
            </li>
            <li>Generate stories, scripts, lyrics, or any other narrative writing for your project.</li>
            <li>
              Put your confidential material (specs, unreleased assets, anything under NDA) into AI
              tools that keep or train on it.
            </li>
            <li>Deliver work whose ownership is in question.</li>
          </ul>
        </div>
      </div>

      <h2 id="questions">Questions</h2>
      <p>
        Want to know how AI was or wasn’t used on something we made? Just ask:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </PolicyDocument>
  );
}
