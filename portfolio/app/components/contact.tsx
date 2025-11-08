"use client";

import React, { useState } from "react";
import Footer from "./Footer";

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative">
      <button
        onClick={copyToClipboard}
        className="relative text-lg font-semibold text-blue-700 hover:text-blue-900 focus:outline-none cursor-pointer transition-all duration-300 hover:scale-105 pb-1"
      >
        <span className="">
          {copied ? "Adresse copiée !" : "ambroise.bosch@gmail.com"}
        </span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0"></span>
      </button>
    </div>
  );
}

function CopyPhoneButton({ phone }: { phone: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative">
      <button
        onClick={copyToClipboard}
        className="relative text-lg font-semibold text-gray-800 hover:text-gray-900 focus:outline-none cursor-pointer transition-all duration-300 hover:scale-105 pb-1"
      >
        <span className="relative z-10">
          {copied ? "Numéro copié !" : "07 67 23 26 72"}
        </span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0"></span>
      </button>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    firstname: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const { name, firstname, email, message } = formData;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstname} ${name}`.trim(),
          email,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message envoyé avec succès ! Je vous répondrai bientôt.",
        });
        setFormData({ name: "", firstname: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Une erreur est survenue",
        });
      }
    } catch (error) {
      console.error("Erreur:", error);
      setStatus({
        type: "error",
        message: "Impossible d'envoyer le message. Veuillez réessayer.",
      });
    } finally {
      setLoading(false);
    }
  };

  const emailCopy = "ambroise.bosch@gmail.com";
  const phoneCopy = "07 67 23 26 72";

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <section
        id="contact"
        className="flex-grow flex flex-col justify-center items-center py-20 px-4 md:px-12"
      >
        <div className="max-w-3xl w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              CONTACT
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-900 via-gray-700 to-gray-500 mx-auto rounded-full mb-4"></div>
          </div>

          <p className="mb-8 text-lg text-gray-700 text-center md:text-left max-w-2xl">
            N&apos;hésitez pas à me contacter, je suis à votre disposition pour
            toute question, collaboration ou opportunité professionnelle.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-10 mb-6">
            <div className="bg-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-xs text-gray-500 mb-1 text-center">
                Email
              </div>
              <CopyEmailButton email={emailCopy} />
            </div>
            <div className="bg-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-xs text-gray-500 mb-1 text-center">
                Téléphone
              </div>
              <CopyPhoneButton phone={phoneCopy} />
            </div>
          </div>

          {status.type && (
            <div
              className={`p-4 rounded-xl mb-8 text-base font-medium shadow-md animate-fade-in ${
                status.type === "success"
                  ? "bg-green-50 text-green-800 border-2 border-green-200"
                  : "bg-red-50 text-red-800 border-2 border-red-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">
                  {status.type === "success" ? "✓" : "⚠"}
                </span>
                <span>{status.message}</span>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                  className="block w-full rounded-xl border-2 border-gray-200 shadow-sm text-base py-2.5 px-4 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 transition-all duration-200 hover:border-gray-300"
                  placeholder="Votre nom"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  onChange={onChange}
                  className="block w-full rounded-xl border-2 border-gray-200 shadow-sm text-base py-2.5 px-4 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 transition-all duration-200 hover:border-gray-300"
                  placeholder="Votre prénom"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                className="block w-full rounded-xl border-2 border-gray-200 shadow-sm text-base py-2.5 px-4 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 transition-all duration-200 hover:border-gray-300"
                placeholder="votre.email@exemple.com"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={onChange}
                className="block w-full rounded-xl border-2 border-gray-200 shadow-sm text-base py-2.5 px-4 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 transition-all duration-200 hover:border-gray-300 resize-none"
                placeholder="Écrivez votre message ici..."
              />
            </div>

            <div className="flex justify-center md:justify-start pt-2">
              <button
                type="submit"
                disabled={loading}
                className="group relative inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-bold rounded-xl shadow-lg text-white bg-gradient-to-r from-blue-900 via-gray-700 to-gray-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {loading ? (
                    <>
                      <span className="inline-block w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></span>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-gray-600 to-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
